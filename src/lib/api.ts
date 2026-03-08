import { env } from "../config/env";

interface ApiError {
  detail: string;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private getToken(): string | null {
    const stored = localStorage.getItem("auth-storage");
    if (!stored) return null;
    try {
      const parsed = JSON.parse(stored) as { state?: { accessToken?: string } };
      return parsed.state?.accessToken ?? null;
    } catch {
      return null;
    }
  }

  private async request<T>(path: string, options: RequestInit = {}): Promise<T> {
    const token = this.getToken();
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...options.headers as Record<string, string>,
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${this.baseUrl}${path}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem("auth-storage");
        window.location.href = "/signin";
        throw new Error("Session expired. Please sign in again.");
      }

      let message = "An unexpected error occurred";
      try {
        const body = (await response.json()) as ApiError;
        message = body.detail;
      } catch {
        // use default message
      }
      throw new Error(message);
    }

    return response.json() as Promise<T>;
  }

  post<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>(path, {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  get<T>(path: string): Promise<T> {
    return this.request<T>(path);
  }
}

export const api = new ApiClient(env.API_URL);

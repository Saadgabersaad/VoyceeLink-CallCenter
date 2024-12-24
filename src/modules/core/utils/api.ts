export const enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
}

export type ApiStatus = {
  message: string
  status: string
}

export type ApiResponse<T> = ApiStatus & {
  data: {
    data: T[]
  }
}

type ApiBody = any | null

export async function api<T>(method: HttpMethod, path: string, body?: ApiBody, headers?: HeadersInit) {
  try {
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-tenant-id': 'develop',
        ...headers
      }
    }

    if (body && method !== HttpMethod.GET) {
      options.body = JSON.stringify(body)
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, options)
    const data: ApiResponse<T> = await response?.json()

    console.log(data)
    if (data.status !== 'success') {
      throw new Error(data?.message)
    }

    return data.data.data as T
  } catch (error) {
    console.error(error)
    throw error
  }
}

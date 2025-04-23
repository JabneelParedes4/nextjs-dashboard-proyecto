import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Esta es la función que Next.js espera
export function middleware(request: NextRequest) {
  // Ejemplo básico
  return NextResponse.next()
}

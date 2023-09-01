import type { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
    console.log('url in route', request.nextUrl);
    console.log('headers in route', Object.fromEntries(request.headers.entries()));
};

class RateLimiter {
  constructor() {
    this.requests = new Map();
  }

  check(request) {
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    const now = Date.now();
    const windowStart = now - 60000; // 1 minute window

    const requestTimestamps = this.requests.get(ip) || [];
    const recentRequests = requestTimestamps.filter(
      (timestamp) => timestamp > windowStart,
    );

    if (recentRequests.length >= 5) {
      // 5 requests per minute limit
      return Promise.reject("Rate limit exceeded");
    }

    recentRequests.push(now);
    this.requests.set(ip, recentRequests);

    // Cleanup old entries
    for (const [key, timestamps] of this.requests.entries()) {
      const validTimestamps = timestamps.filter(
        (timestamp) => timestamp > windowStart,
      );
      if (validTimestamps.length === 0) {
        this.requests.delete(key);
      } else {
        this.requests.set(key, validTimestamps);
      }
    }

    return Promise.resolve();
  }
}

// Create a singleton instance
const rateLimiter = new RateLimiter();

export const rateLimit = {
  check: (request) => rateLimiter.check(request),
};

// Read-only client for the Phluent Labs portfolio API. All blog/project/settings
// content lives in the Phluent Labs Neon DB and is edited from the PL admin's
// "Portfolio" tab; this site is a pure consumer of the public /api/portfolio/*
// endpoints (CORS-enabled, only published content exposed).
//
// Base URL comes from NEXT_PUBLIC_PORTFOLIO_API (set to the PL deployment,
// e.g. https://phluentlabs.com). Falls back to prod so builds don't break if
// the env var is missing; override per-environment in Vercel.

const API_BASE = (
    process.env.NEXT_PUBLIC_PORTFOLIO_API ?? "https://phluentlabs.com"
).replace(/\/+$/, "");

export type PortfolioPostSummary = {
    slug: string;
    title: string;
    description: string | null;
    coverImage: string | null;
    tags: string[];
    publishedAt: string;
    updatedAt: string;
};

export type PortfolioPost = PortfolioPostSummary & {
    body: string; // Tiptap HTML
};

export type PortfolioProject = {
    id: string;
    title: string;
    description: string;
    repoUrl: string | null;
    liveUrl: string | null;
    image: string | null;
    tech: string[];
    featured: boolean;
    sortOrder: number;
};

export type PortfolioSettings = {
    heroTitle: string;
    heroSubtitle: string;
    aboutHtml: string;
    githubUrl: string | null;
    twitterUrl: string | null;
    linkedinUrl: string | null;
    email: string | null;
};

// Revalidate fetched content every 60s (ISR) so admin edits appear within a
// minute without a redeploy.
const REVALIDATE = 60;

async function getJson<T>(path: string): Promise<T | null> {
    try {
        const res = await fetch(`${API_BASE}${path}`, {
            next: { revalidate: REVALIDATE },
        });
        if (!res.ok) return null;
        return (await res.json()) as T;
    } catch {
        return null;
    }
}

export async function fetchPosts(): Promise<PortfolioPostSummary[]> {
    const data = await getJson<{ posts: PortfolioPostSummary[] }>("/api/portfolio/posts");
    return data?.posts ?? [];
}

export async function fetchPost(slug: string): Promise<PortfolioPost | null> {
    const data = await getJson<{ post: PortfolioPost | null }>(
        `/api/portfolio/posts/${encodeURIComponent(slug)}`,
    );
    return data?.post ?? null;
}

export async function fetchProjects(): Promise<PortfolioProject[]> {
    const data = await getJson<{ projects: PortfolioProject[] }>("/api/portfolio/projects");
    return data?.projects ?? [];
}

export async function fetchSettings(): Promise<PortfolioSettings | null> {
    const data = await getJson<{ settings: PortfolioSettings | null }>("/api/portfolio/settings");
    return data?.settings ?? null;
}

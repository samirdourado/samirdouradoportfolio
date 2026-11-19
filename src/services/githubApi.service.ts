export interface GitHubUser {
    avatar_url: string;
    name: string;
    bio: string;
    html_url: string;
};

export const geGitHubProfile = async (username: string): Promise<GitHubUser | null> => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`, {
            next: { revalidate: 3600}
        });

        if (!response.ok) return null;

        const data: GitHubUser = await response.json();

        return data;
    } catch (error) {
        console.error('Erro ao buscar perfil do GitHub, se chegou aqui entre em contato comigo.', error);
        return null;
    }
};
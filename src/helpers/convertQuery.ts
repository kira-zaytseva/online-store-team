export const convertQuery = (currentPage: string): URLSearchParams => {
    const url = new URL(window.location.href);
    const hash = url.hash.substring(1).split(currentPage)[1];
    const params = new URLSearchParams(hash);
    return params;
};

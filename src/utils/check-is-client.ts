export function checkIsClient(): boolean {
	return typeof document === 'object' && typeof window === 'object'
}

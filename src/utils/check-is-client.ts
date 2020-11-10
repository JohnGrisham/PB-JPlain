export function checkIsClient(): boolean {
	return typeof document !== 'undefined' && typeof window !== 'undefined'
}

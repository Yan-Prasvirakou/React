import {} from 'styled-components';
import { DefaultThemeType } from './News';

declare module 'styled-components' {
	export interface DefaultTheme extends DefaultThemeType {}
}
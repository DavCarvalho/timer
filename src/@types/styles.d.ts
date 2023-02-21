import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

//criando uma tipagem para o modulo styled
//toda vez que ue importar o styled componentes ele vai puxar as tipagens q eu difinir aqui
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType { }
}
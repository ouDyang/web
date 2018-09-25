import { injectGlobal} from 'styled-components';

injectGlobal`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1536932226769'); /* IE9*/
  src: url('iconfont.eot?t=1536932226769#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('iconfont.ttf?t=1536932226769') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('iconfont.svg?t=1536932226769#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
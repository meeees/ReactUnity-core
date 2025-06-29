import { render } from '@reactunity/renderer';
import { SelectionProvider, useSelection } from '../context/selection';
import { StyleContext } from '../context/style';
import { Classes } from './classes';
import { GlobalStyle } from './global-style';
import { GroupedStyles } from './grouped-styles';
import style from './index.module.scss';

function App() {
  const selection = useSelection();
  return (
    <view className={style.host}>
      {selection ? (
        <>
          <GlobalStyle />
          <Classes />
          <GroupedStyles />
        </>
      ) : (
        <NotSelectedView />
      )}
    </view>
  );
}

function NotSelectedView() {
  return (
    <view>
      <image source="url(resource:ReactUnity/editor/logo)" className={style.logo} />

      <view>Select an element in the scene to edit its styles</view>
      <span>Only works for UGUI, for UI Document use builtin UI Toolkit Editor</span>
    </view>
  );
}

render(
  <StyleContext>
    <SelectionProvider>
      <App />
    </SelectionProvider>
  </StyleContext>,
);

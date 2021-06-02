import { useRef, useEffect } from 'react';
import { useBrowserEvent } from './hooks/useBrowserEvent';
import { keyNames } from './utils/keyboard';

function useFocusTrap<Element extends HTMLElement = HTMLDivElement>({
  active,
}: {
  active: boolean;
}): React.MutableRefObject<Element | null> {
  const ref = useRef<Element | null>(null);
  const tabbableList = useRef<Array<HTMLElement>>([]);

  const focusBackward = () => {
    console.log('focus backwards');
  };

  const focusForward = () => {
    console.log('focus forwards');
  };

  useBrowserEvent('keydown', (e) => {
    if (active) {
      e.preventDefault();
      switch (e.key) {
        case keyNames.tab:
          if (e.shiftKey) {
            focusBackward();
          } else {
            focusForward();
          }
          break;
        default:
          break;
      }
    }
  });

  useEffect(() => {
    if (active) {
      tabbableList.current = getTabbableElements(ref.current);
    }
  }, [active, ref.current]);

  return ref;
}

// Credit:
//  - https://github.com/tailwindlabs/headlessui/blob/main/packages/%40headlessui-react/src/utils/focus-management.ts

function getTabbableElements(container: HTMLElement | null) {
  const tabbableList = Array.from(container?.querySelectorAll<HTMLElement>(focusableSelector) || []);
  console.log(tabbableList);

  return tabbableList;
}

let focusableSelector = [
  '[contentEditable=true]',
  '[tabindex]',
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'iframe',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
]
  .map((selector) => `${selector}:not([tabindex='-1']):not([style*='display: none'])`)
  .join(',');

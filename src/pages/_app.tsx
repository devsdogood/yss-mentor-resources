import '@styles/globals.css'
import 'bulma/css/bulma.min.css'
import type { AppProps } from 'next/app'
import AppLayout from '@wrappers/AppWrapper';
import {JSX as IoniconsJSX} from 'ionicons'
import { defineCustomElements as ionDefineCustomElements } from '@ionic/core/loader';
import {HTMLAttributes, ReactText, useEffect} from 'react'
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

type ToReact<T> = {
  [P in keyof T]?: T[P] & Omit<HTMLAttributes<Element>, 'className'> & {
    class?: string;
    key?: ReactText;
  }
}

declare global {
  export namespace JSX {
    interface IntrinsicElements extends ToReact<IoniconsJSX.IntrinsicElements> {}
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ionDefineCustomElements(window)
  })
  
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp

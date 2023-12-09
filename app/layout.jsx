import "@/styles/globals.css";
import "@/public/assets/fonts/fonts.css";
import NavBar from "@/components/NavBar";

export const metadata = {
    title: 'Garoo Inc',
    description: 'Diseño y desarrollo de páginas web en Guatemala',
    url: 'https://garooinc.com/',
    image: '/assets/images/icon.png',
}

const RootLayout = ({children}) => {
  return (
    <html lang="es">
        <head>
            <title>{metadata.title}</title>
            <link rel="icon" type="image/png+xml" href="/assets/images/icon.png" />
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:image" content={metadata.image} />
            <meta property="og:url" content={metadata.url} />
            <meta name="keywords" content="diseño web, desarrollo web, web en Guatemala, páginas web, "></meta>            
        </head>
        <body>
            <main className='app'>
                <NavBar />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout
import "@/styles/globals.css";
import "@/public/assets/fonts/fonts.css";
import NavBar from "@/components/NavBar";

export const metadata = {
    title: 'Garoo Inc',
    description: 'Diseño y desarrollo de páginas web en Guatemala',
    url: '',
    image: '',
}

const RootLayout = ({children}) => {
  return (
    <html lang="es">
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:image" content={metadata.image} />
            <meta property="og:url" content={metadata.url} />
            <meta name="keywords" content="diseño web, desarrollo web, web en Guatemala, páginas web, "></meta>            
            <link rel="icon" href="/assets/images/logo.png" />
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
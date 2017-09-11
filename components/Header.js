import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import header from '/styles/header.scss'
Router.onRouteChangeStart = (url) =>{
    console.log(`loading:${url}`)
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const linkStyle = {
  // marginRight: 15,
  //   height: '100%'
}

const Header = () => (
    <div className="header">
        <style jsx global>{header}</style>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/h5">
            <a style={linkStyle}>h5</a>
        </Link>
        <Link href="/mobx">
            <a style={linkStyle}>mobx</a>
        </Link>
        <Link href="/store001">
            <a style={linkStyle}>store001</a>
        </Link>
        <Link href="/store002">
            <a style={linkStyle}>store002</a>
        </Link>
    </div>
)

export default Header

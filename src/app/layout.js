import './globals.css'
import './layout.css'

export const metadata = {
  title: 'Louis Grassi | Dev',
  description: 'Personal portfolio for apsiring software engineer Louis Grassi.',
}

export default function RootLayout({ children }) {

  // const scrollToPosition = (position) => {
  //   const height = window.innerHeight;
  //   window.scrollTo({
  //     top: height * position,
  //     left: 0,
  //     behavior: 'smooth' // Add this line to smoothly scroll to the position
  //   });
  // }

  return (
    <html lang="en">
      <head/>
      <body>
        {/* <nav className="navbar">
          <div className="logo"></div>
          <div className="wrapper">
            <ul>
              <li>
                <a href="#" className="navText">About</a>
              </li>
              <li>
                <a href="#" className="navText">Work</a>
              </li>
              <li>
                <a href="#" className="navText">Contact</a>
              </li>
            </ul>
          </div>  
        </nav> */}
        {children}
      </body>
    </html>
  )
}

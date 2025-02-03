import React from 'react'

function DashboardLayout({children}) {
  return (

    <div>
        <div>
            <Sidenav/>
        </div>
        <div>
            {children}
        </div>    
    </div>
  )
}

export default DashboardLayout
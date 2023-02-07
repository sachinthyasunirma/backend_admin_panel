import React from 'react'

function AuthLayout() {
  return (
    <div>AuthLayout</div>
  )
}

export default AuthLayout

AuthLayout.getLayout = function PageLayout(page){
    return(
        <>
            {page}
        </>
    )
}
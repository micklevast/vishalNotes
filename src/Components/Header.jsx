import React from 'react'

export default function Header() {
    return (
        <>
            <nav class="navbar navbar-light bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="https://picsum.photos/200/300" alt="logo" width="30" height="24" class="d-inline-block align-text-top" />
                         <span style={{color:"white"}}>Vishal-Notes</span>
                    </a>
                </div>
            </nav>
        </>
    )
}

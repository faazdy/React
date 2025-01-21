
export function HeaderNav(){
    const navLinks = [
        {
            id: 1,
            nombreLink: "Home",
            enlace: "#"
        },
        {
            id: 2,
            nombreLink: "About",
            enlace: "#"
        },
        {
            id: 3,
            nombreLink: "Support",
            enlace: "#"
        },
    ]
    
    return(
        <header>
            <nav>
                <ul>
                    {navLinks.map((e)=>{
                        return(
                            <li><a href={e.enlace}>{e.nombreLink}</a></li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}
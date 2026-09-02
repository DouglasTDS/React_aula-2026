function Footer({nome, ano}) {
    return (
        <footer className="footer">
            <p> {nome}</p>
            <p>{ano}</p>
            <p>Feito com React</p>
        </footer>
    );
}
export default Footer;
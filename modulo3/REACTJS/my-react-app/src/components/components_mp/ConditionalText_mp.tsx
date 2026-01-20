export default function ConditionalText_mp(){
    const isLoggedIn = true;

    return (
        <p>
            {isLoggedIn ? 'Bienvenido a Restaurante Cumbre! ' : 'Por favor inicie sesión'}
        </p>
    )
}
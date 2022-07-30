export const SignIn = () => {
    return (
        <div>
            <form>
                <label>
                    Логин:
                    <input type="text" name="name" />
                </label>
                <label>
                    Пароль:
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="Отправить" />
            </form>
        </div>
    )
}
export default SignIn;
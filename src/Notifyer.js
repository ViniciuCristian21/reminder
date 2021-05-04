const Notfiyer = {
    async init(){
        const permission = await Notification.requestPermission();
        if( permission !== "granted" ) {
            throw new Error('Permissao negada')
        }
        // Notfiyer.notify();
    },
    notify({title, body, icon}){
        return () => new Notification(title,{
            body,
            icon
        })
    }
}
export { Notfiyer }
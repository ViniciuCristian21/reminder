import { Notfiyer } from './Notifyer.js';
import { Timer } from './Timer.js';
import { Emitter } from './Emitter.js';


const notify = Notfiyer.notify({
    title: 'Lembrete',
    body: 'Lembrar de estudar'
})

const App = {
    message: {title: "Hora de malhar", body: "Fazer abdominais"},
    async start(){
        try{
            await Notfiyer.init();

            Emitter.on('countdown-start', notify);

            Emitter.on('countdown-end', () => {
                // Timer.init();
            });

            Timer.init();
            
        }catch (err){
            console.log(err.message);
        }
    }
}
export { App }
import './style.css'



const MainContato = () => {
    return (
        <>
                <p>Para agendamento de consultas e procedimentos, utilize uma das opções abaixo:</p>
            <div class="container_contato">
                <div class="container_contato_wpp">
                    <p><a href="https://wa.me/+5511977407666?text=Olá,%20Gostaria%20de%20marcar%20uma%20consulta." title="Marcar consulta por Whatsapp?" rel="noopener noreferrer" target="_blank"><i class="fa fa-whatsapp fa-lg"  aria-hidden="true"></i><b>Whatsapp: </b>(xx)xxxxx-xxxx</a></p>
             Para maior praticidade, experimente clicar sobre o número acima. O Whatsapp será aberto no seu celular, tablet ou desktop, já preparado para o envio da sua mensagem para o nosso número. Você apenas precisará digitar o texto ou gravar o áudio da mensagem.

Fora do horário comercial, encaminhe sua mensagem por Whatsapp. Daremos um retorno a você no dia útil seguinte. Obrigado!
                </div>
                <div class="container_contato_email">
                    <p>
                    <a href="mailto:leonard.ferraz@hotmail.com?subject=Quero%20te%20contratar!&body:Oi!" target="_blank" rel="noopener noreferrer" title="Marcar consulta por e-mail?">
                    <span class="material-icons">email</span><b>Email: </b>example@hotmail.com </a>
                    </p>
                </div>

                <div class="container_contato_telefone">
                
                    <p><span class="material-icons">phone</span><b>Telefone: </b> <a href='tel:+5511954563537' target="_blank" rel="noopener noreferrer" title="Ligar para marcar consulta?">(xx)yyyyy-yyyy </a>  ou <a href='tel:+5511954563537' target="_blank" rel="noopener noreferrer" title="Ligar para marcar consulta?">(xx)zzzzz-zzzz </a> </p>
                </div>
            </div>
        </>
    )

}





export default MainContato
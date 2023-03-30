class Produto {

    constructor(totalpagar, dinheiro, ){
        this.totalpagar = totalpagar
        this.dinheiro = dinheiro
         
    }
    
    soma(){
        let troco = this.dinheiro - this.totalpagar
        if (this.dinheiro > this.totalpagar){
            return troco
                
        }
        else if(this.dinheiro < this.totalpagar){
           $('#modal-erro').modal('show')
           
            cancelar()
            return ''
        }
        
        
        }
      
}
enviaDados = () => {
    let produto = new Produto ()
    produto.totalpagar = document.getElementById('totalpagar').value
    produto.dinheiro = document.getElementById('dinheiro').value
    
    document.getElementById('troco').value = produto.soma()
    
    
    
}

cancelar = () => {
    document.getElementById('totalpagar').value = " "
    document.getElementById('dinheiro').value = " "
    document.getElementById('troco').value = " "
}

cadastraProduto = () =>{


   let id = 2
   let quantidade = document.getElementById('quantidade').value
   let produtos =  document.getElementById('produtos').value
   let codBarras = document.getElementById('codbarras').value
   let valorUnitario = document.getElementById('valorunitario').value

   let bd = new Bd(id,quantidade, produtos, codBarras, valorUnitario)

       
    
    bd.adicionaDados()

    

 
    

    
}
/* Banco de dados*/

class Bd{
    constructor(id,quantidade, produtos, codBarras, valorUnitario){
        this.id = id ++
        this.quantidade = quantidade
        this.produtos = produtos
        this.codBarras = codBarras
        this.valorUnitario = valorUnitario
    }

    adicionaDados(){

        let data = [this.id , this.quantidade , this.produtos, this.codBarras, this.valorUnitario]
        localStorage.setItem(this.id,data)

       

    }

    consultaDados(id){
       
        return localStorage.getItem(id)
    }
}
















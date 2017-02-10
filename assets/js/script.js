"use strict";

class Menu{
	constructor(codigo,link,class_icon,nome){
		this.codigo = codigo;
		this.link = link;
		this.class_icon = class_icon;
		this.nome = nome;
	} 
	//Monta estrutura do menu -> <li><a href="#"><span class="icon s1"></span>Acessórios para noivas</a></li>
	lista(servicos){
		var lista = document.getElementById("lista");
		for(var i=0; i < servicos.length; i++){
			let menu = new Menu(servicos[i].codigo,servicos[i].link,servicos[i].class_icon,servicos[i].nome);
			var li_list, link, title, icon, nome;
			
			li_list = document.createElement("li");
			link = document.createElement("a");
			icon = document.createElement("span"); 
		 	nome = document.createTextNode(menu.nome);

			icon.classList.add("icon");
			icon.classList.add(menu.class_icon);
						
			link.appendChild(icon);
			link.appendChild(nome);

		  	li_list.appendChild(link);
			lista.appendChild(li_list);
		}
	}
}

let menu = new Menu();
menu.lista(servicos);

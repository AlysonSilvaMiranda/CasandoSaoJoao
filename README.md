# CasandoSãoJoão 

Projeto demonstração aplicando Gulp e automatizando tarefas de Pré-processamento, Otimização arquivos CSS, JavaScript e Imagens, Live-reloading com a Sincronização do Navegador e configuração para produção.

## Pré-requisitos
```
npm e Gulp  
```

## Utilização
```shell
gulp build
```

### Instalação

Instalar o `gulp-install` e suas dependências:

```shell
npm install --save gulp-install
```

## Tarefas do Gulp
Código:
```shell
gulp images 
```
Otimiza todas as IMAGENS da pasta (app/assets/imagens) e move para a pasta de produção (dist/app/assets/imagens/). 


Código:
```shell
gulp sass 
```
Compila o arquivo scss para css.


Código:
```shell
gulp useref 
```
Otimiza e Minifica os arquivos CSS e JS.


Código:
```shell
gulp images 
```
Realiza a otimização das imagens e move para produção.


Código:
```shell
gulp browserSync 
```
Inicia um servidor para o projeto.


Código:
```shell
gulp fonts 
```
Copia a pasta fonts para produção.


Código:
```shell
gulp watch 
```
Abre o navegador e mantém a sincronização com o código em tempo real.


Código:
```shell
gulp build 
```
Realiza a limpeza da pasta dist e realiza o build do projeto.


 


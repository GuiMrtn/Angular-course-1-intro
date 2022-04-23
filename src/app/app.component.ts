//Ici on importe les éléments dont va avoir besoin notre fichier. Ici, on importe l'élément Component qui provient de la librairie @angular/core
import { Component } from '@angular/core';

//Ici on utilise notre component sous la forme d'un décorateur avec l'@. Il va nous permettre de construire un composant web avec Angular. Ici on a un selector qui va nous permettre de donner un nom à composant, hisoire de l'identifier par la suite. Ici, notre composant s'appelle app-root. Ainsi, dans la page web, c'est la balise app-root qui sera insérée. Ensuite, on a le template qui va définir le code html qui est associé à ce composant web
@Component({
  selector: 'app-root',
  template: `<h1>Welcome to {{title}}!</h1>`
      
})
export class AppComponent {
  //Ici on décrit une propriété pour notre composant (qui s'appelle AppComponent) et qui va s'appeler title. On va lui attribuer la valeur ng-angular-app et Angular va être capable de pousser cette valeur dans le template (ce que nous avons juste au-dessus). Il y a enfin le export qui va nous permettre d'exporter notre composant pour le rendre disponible ailleurs dans l'application. Par exemple, dans app.module.ts, à la ligne 5, on importe notre composant AppComponent.
  title = 'ng-angular-app';
}

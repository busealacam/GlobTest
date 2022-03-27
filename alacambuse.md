```
                        ____
                   .---'-    \
      .-----------/           \
     /   Coucou  (         ^  |   __
&   (     ECHO    \        O  /  / .'
'._/(              '-'  (.   (_.' /
     \                    \     ./
      |    |       |    |/ '._.'
       )   @).____\|  @ |
   .  /    /       (    | 
  \|, '_:::\  . ..  '_:::\ ..\).
```

## Question 1 :
	
La fonction `foo` prend en paramètre des intervalles (dans une liste) et elle rend un ou des intervalles (dans une liste).
Si les intervalles n'ont pas l'intersection elle rend tels quel. 
S'il y a une intersection ou des intersections elle rend l'union des intervalles.
S'il y a les deux, elle rend une liste de deux cas.

## Question 2 :

Voir le fichier `foo.js`

## Question 3 : 

J'ai passé trois jours sur ce projet. Quand j'ai compris que la sortie attendue est des unions d'intervalles j'ai voulu comparer  les deux intervalles ont une intersection ou pas. Donc, pour ça j'ai fait ces fonctions :

```javascript
// La fonction prend un chiffre et une liste d'intervalle
// La fonction return true, si le chiffre est dans l'intervalle sinon return false
const checkifinside = function(n, intvl) {
    if(n >= intvl[0] && n <= intvl[1]) {
        return true;
    }
    else {
        return false;
    }
};
```

```javascript
// La fonction prend deux liste d'intervalle
// La fonction return true, si les deux intervalles ont une intersection sinon return false
const intsectionwithin = function(intvl1, intvl2) {

    if(checkifinside(intvl1[0], intvl2) ||
       checkifinside(intvl1[1], intvl2) ||
       checkifinside(intvl2[0], intvl1) ||
       checkifinside(intvl2[1], intvl1)) {
        return true;
    }
    else {
        return false;
    } 
};
```

Après il fallait faire une sortie d'intervalle réunie avec les valeurs plus petit et plus grand donc j'ai fait cette fonction : 

```javascript
// La fonction prend deux intervalles
// La fonction return min et max d'intervalle, si les deux intervalles ont une intersection sinon return tels quel
const startend = function(intvl1, intvl2) {
    if(intsectionwithin(intvl1, intvl2) == true) {
        let smallest = Math.min(intvl1[0],intvl2[0]);
        let largest = Math.max(intvl1[1],intvl2[1]);
        return [smallest, largest];
    }
    else {
        return [intvl1, intvl2];
    }
};
```

Maintenant, il fallait faire une fonction que prend une liste de deux ou plus de intervalles. Donc j'ai fait plusieurs essais mais c'est devenu très compliqué. Après des recherches sur l'internet ces deux liens :

- https://www.youtube.com/watch?v=qKczfGUrFY4
- https://nerohoop.gitbooks.io/cs-knowledge/content/array/merge-overlapping-intervals.html

Ils m'ont donné un autre point de vue et donc j'ai réussi trouver la fonction.


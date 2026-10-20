
class Solution {
    /**
     * Trouve la médiane de deux tableaux triés.
     *
     * @param nums1 Premier tableau trié
     * @param nums2 Deuxième tableau trié
     * @return La médiane des deux tableaux réunis
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {

        // On crée deux variables pour pouvoir échanger les tableaux
        let numsA = nums1;
        let numsB = nums2;

        // Nombre total d'éléments dans les deux tableaux
        const total = numsA.length + numsB.length;

        // Nombre d'éléments à placer dans la première moitié
        const half = Math.floor(total / 2);

        // On veut toujours faire la recherche binaire
        // sur le tableau le plus court pour gagner en efficacité
        if (numsA.length > numsB.length) {
            const temp = numsA;
            numsA = numsB;
            numsB = temp;
        }

        // Bornes de notre recherche binaire dans numsA
        let l = 0;
        let r = numsA.length;

        // On cherche la bonne position de séparation
        while (l <= r) {

            // i = nombre d'éléments de numsA placés à gauche
            let i = Math.floor((l + r) / 2);

            // j = nombre d'éléments de numsB placés à gauche
            // Pour que la moitié gauche contienne "half" éléments
            let j = half - i;

            // Dernier élément de la partie gauche de A
            // S'il n'y en a pas, on utilise -Infinity
            let aLeft = i > 0
                ? numsA[i - 1]
                : Number.NEGATIVE_INFINITY;

            // Premier élément de la partie droite de A
            // S'il n'y en a pas, on utilise +Infinity
            let aRight = i < numsA.length
                ? numsA[i]
                : Number.POSITIVE_INFINITY;

            // Dernier élément de la partie gauche de B
            let bLeft = j > 0
                ? numsB[j - 1]
                : Number.NEGATIVE_INFINITY;

            // Premier élément de la partie droite de B
            let bRight = j < numsB.length
                ? numsB[j]
                : Number.POSITIVE_INFINITY;

            // On vérifie que la séparation est correcte :
            // tous les éléments à gauche doivent être
            // inférieurs ou égaux aux éléments à droite.
            if (aLeft <= bRight && bLeft <= aRight) {

                // Si le nombre total est impair,
                // la médiane est le plus petit élément
                // de la partie droite.
                if (total % 2 !== 0) {
                    return Math.min(aRight, bRight);
                }

                // Si le nombre total est pair,
                // la médiane est la moyenne entre :
                // - le plus grand élément de gauche
                // - le plus petit élément de droite
                return (
                    Math.max(aLeft, bLeft) +
                    Math.min(aRight, bRight)
                ) / 2;

            } else if (aLeft > bRight) {

                // A contient un élément trop grand à gauche.
                // On déplace la séparation vers la gauche.
                r = i - 1;

            } else {

                // La séparation doit être déplacée vers la droite.
                l = i + 1;
            }
        }

        // En principe, on ne passe jamais ici
        // si les tableaux sont triés et que l'entrée est valide.
        throw new Error("Impossible de trouver la médiane");
    }
}

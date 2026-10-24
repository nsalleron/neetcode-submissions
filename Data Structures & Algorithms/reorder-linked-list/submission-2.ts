/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
     * Réorganise la liste directement, sans modifier les valeurs.
     *
     * Exemple :
     * 1 -> 2 -> 3 -> 4 -> 5
     * devient :
     * 1 -> 5 -> 2 -> 4 -> 3
     */
    reorderList(head: ListNode | null): void {
        // Une liste vide ou avec un seul élément est déjà réorganisée.
        if (head === null || head.next === null) {
            return;
        }

        /*
         * Étape 1 : trouver le milieu de la liste.
         *
         * slow avance d'un nœud à la fois.
         * fast avance de deux nœuds à la fois.
         *
         * Lorsque fast atteint la fin, slow se trouve
         * à la fin de la première moitié.
         */
        let slow: ListNode = head;
        let fast: ListNode | null = head.next;

        while (fast !== null && fast.next !== null) {
            slow = slow.next!;
            fast = fast.next.next;
        }

        /*
         * Séparer la liste en deux parties.
         *
         * Exemple :
         * 1 -> 2 -> 3 -> 4 -> 5
         *
         * première moitié :
         * 1 -> 2 -> 3
         *
         * deuxième moitié :
         * 4 -> 5
         */
        let second: ListNode | null = slow.next;
        slow.next = null;

        /*
         * Étape 2 : inverser la deuxième moitié.
         *
         * 4 -> 5 devient 5 -> 4
         */
        let previous: ListNode | null = null;

        while (second !== null) {
            // Sauvegarder le nœud suivant avant de modifier le lien.
            const nextNode: ListNode | null = second.next;

            // Inverser le lien courant.
            second.next = previous;

            // Avancer previous et second.
            previous = second;
            second = nextNode;
        }

        /*
         * previous est maintenant la tête de la deuxième moitié inversée.
         *
         * première moitié :          1 -> 2 -> 3
         * deuxième moitié inversée : 5 -> 4
         */

        second = previous;
        let first: ListNode | null = head;

        /*
         * Étape 3 : fusionner alternativement les deux listes.
         *
         * On prend :
         * - un nœud de la première moitié ;
         * - puis un nœud de la deuxième moitié.
         *
         * Résultat :
         * 1 -> 5 -> 2 -> 4 -> 3
         */
        while (second !== null) {
            // Sauvegarder les prochains nœuds des deux listes.
            const firstNext: ListNode | null = first!.next;
            const secondNext: ListNode | null = second.next;

            // Insérer un nœud de la deuxième moitié après first.
            first!.next = second;

            // Reconnecter la suite de la première moitié.
            second.next = firstNext;

            // Avancer dans les deux listes.
            first = firstNext;
            second = secondNext;
        }
    }
}

class Solution {
    /**
     * @param {number} target - Position de la ligne d'arrivée
     * @param {number[]} position - Positions initiales des voitures
     * @param {number[]} speed - Vitesses respectives des voitures
     * @return {number} - Nombre de flottes de voitures
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        // Associe chaque voiture à sa position et à sa vitesse.
        const posSpeed = position.map((p, i) => [p, speed[i]]);

        // Trie les voitures de la plus proche à la plus éloignée de la cible.
        // On commence par la voiture en tête, car une voiture ne peut jamais
        // dépasser celle qui la précède : elle peut seulement la rejoindre.
        posSpeed.sort((a, b) => b[0] - a[0]);

        // Stocke les temps d'arrivée des flottes, dans l'ordre des positions.
        const stack = [];

        for (const [p, s] of posSpeed) {
            // Temps nécessaire à cette voiture pour atteindre la cible,
            // si elle roule seule à vitesse constante.
            const time = (target - p) / s;

            stack.push(time);

            // Si cette voiture arrive en un temps inférieur ou égal à celui
            // de la flotte devant elle, elle la rattrapera avant ou à la cible.
            // Elle rejoint donc cette flotte au lieu d'en former une nouvelle.
            if (
                stack.length >= 2 &&
                stack[stack.length - 1] <= stack[stack.length - 2]
            ) {
                stack.pop();
            }
        }

        // Chaque temps restant dans la stack correspond à une flotte distincte.
        return stack.length;
    }
}
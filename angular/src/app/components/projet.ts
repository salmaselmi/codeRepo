export class Projet {
    constructor( 
        public Id: string,
        public gouvernorat: string,
        public Commune: string,
        public Nb_maisons: string,
        public Nb_quartiers: string,
        public Nb_habitants: string,
        public superficie_quartier: string,
        public superficie_quartier_couvert: string,
        public rapport_superficie: string,
        public taux_habitation: string,
        public rapport_depense_maison: string,
        public composante_projet: string,
        public voiries_cout: string,
        public voiries_taux: string, 
        public Voiries_qte: string 

    ) { }

   
}
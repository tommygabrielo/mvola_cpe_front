import React from 'react';
import doct from './doct.jpg'
import './blog.css';

const Blog = () => (
  <div className="gp" id='blog'>
    <div className="gpt3__header-content">
      <h2 className="gradient__text">Historiques</h2>
      <div >
        <p style={{fontSize:"16px", wordSpacing:"4px", lineHeight:"25px"}}>Il est créé le 03 Décembre 1997 à Antananarivo sous la direction de <strong> RATEFIARIVONY Jacques Audace</strong>. A cette époque, il n’y avait que seulement 20 étudiants et 9 personnels. Durant l’année scolaire 2022-2023, le nombre des élèves inscrits dans tous Madagascar comptait environ 10.000 et le personnel 400.
          <br></br> <br /> Le COURS CPE se distingue par des résultats exceptionnels obtenus par les étudiants avec un taux de réussite élevé aux examens CEPE, BEPC et baccalauréat.
          <br></br> <br /> A partir de l’année 2007, issu de la célébration du 10ème anniversaire, le LYCEE PRIVE CPE est né à Behoririka et maintenant il existe cinq (5) LYCEE PRIVE CPE : Behoririka, Ankatso, Tsiroanomandidy, Tuléar et Fianarantsoa.
        </p>
        {/* <img src={doct} alt="Description de l'image" /> */}
      </div>
    </div>
  </div>
);

export default Blog;

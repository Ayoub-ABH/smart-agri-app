import React from 'react'
import { Link } from 'react-router-dom'
import Carousal from '../components/Carousal'
import Services from '../components/Services'

const Home = () => {
  return (
    <div className='home'>
      <Carousal/>

      <div className="description">
        <h1 className='title'>description</h1>
        <p className='content'>
          <q> Le système d'arrosage automatique de notre projet utilise
             les dernières technologies pour aider les propriétaires à économiser 
             de l'eau et à lutter contre la sécheresse. Notre système utilise un design
              intelligent pour fournir une irrigation précise et ciblée, ce qui réduit 
              considérablement le gaspillage d'eau par rapport aux méthodes traditionnelles d'arrosage. 
              De plus, notre équipe de professionnels qualifiés offre un service de suivi technique et 
              de maintenance pour garantir que votre système reste en parfait état de fonctionnement.
               Avec son design élégant et son matériel puissant,
             notre système est la solution idéale pour une pelouse saine et verdoyante toute l'année </q>
        </p>
      </div>

      <Services/>
    </div>
  )
}

export default Home
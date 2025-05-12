import React, { useRef } from 'react';
import './recu.css';
import { useReactToPrint } from 'react-to-print';
// const LigneRecu = ({ paiements, CODEMOTIF, MONTANT, montantTotal }) => {
    const LigneRecu = ({ paiements, montantTotal, nomUtilisateur }) => {
        console.log(nomUtilisateur);
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'recu-data',
        onAfterPrint: () => alert('Impression réussie')
    });

    return (
        <>
            <div ref={componentRef}>
                <h1 className=" CPE">COURS CPE Fianarantsoa</h1>
                <p className="text-center">Tél: 0349353203</p>
                {/* JE VEUX AFFICHER LE NOM ICI */}
                <p className="text-center">Nom: {nomUtilisateur}</p>
                <p className="text-center">DATE</p><br />
                <div className="tablemiaraka" >
                <table className="tablerecu">
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>CLASSE</th>
                            <th>MOTIF</th>
                            <th>MONTANT</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>


                        </tr>
                    </thead>
                    {/* <tbody>
                  
                    {paiements.map((paiement, index) => (
                        <tr key={index}>
                            <td>{paiement.CODEMOTIF}</td>
                            <td>{paiement.MONTANT}</td>
                        </tr>
                    ))}
                       </tbody> */}
                    <tbody>

                        <tr >
                            <td className="t">VALEURE MOTIF</td>
                            <td className="t">MONTANT</td>
                            <td className="t">VALEURE MOTIF</td>
                            <td className="t">MONTANT</td>
                        </tr>

                    </tbody>
                </table>
                </div>
                
                <h2 className="total">TOTAL:{montantTotal}</h2><br />
                <p className="FANEVA">"Mettez votre confiance dans notre expérience"</p>
                <h1 className=" CPE">NON REMBOURSABLE</h1>
         
                <br /><br /><br />
            </div>
            <button className="IMPRIMER" onClick={handlePrint}>Imprimer</button>
        </>
    );
};

export default LigneRecu;

import React, { useRef } from "react";
import { useReactToPrint } from 'react-to-print';
const PDFreact = ({ paiements }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'recu-data',
    onAfterPrint: () => alert('Impression réussie')
  });

  return (
    <>
      <div ref={componentRef}>
        <h1 className="text-center my-3 border py-2">Liste des reçus</h1>
        <table>
          <thead>
            <tr>
              <th>MOTIF</th>
              <th>MONTANT</th>
            </tr>
          </thead>
          <tbody>
            {paiements.map((paiement, index) => (
              <tr key={index}>
                <td>{paiement.CODEMOTIF}</td>
                <td>{paiement.MONTANT}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={handlePrint}>Imprimer</button>
    </>
  );
}

export default PDFreact;
import React from "react";

function ContentCard() {
  return (
    <div className="bg-secondary w-full p-10 rounded-lg">
      <h1 className="text-primary mb-5 text-2xl">DAY 3 - DIV</h1>
      <p className="text-primary text-lg">
        O elemento de divisão <span className="text-emphasis">&lt;div&gt;</span> é um
        container genérico para conteúdo de fluxo, que de certa forma não
        representa nada. Ele pode ser utilizado para agrupar elementos para fins
        de estilos (usando class ou id), ou porque eles compartilham valores de
        atributos, como lang. Ele deve ser utilizado somente quando não tiver
        outro elemento de semântica (tal como
        <span className="text-emphasis"> &lt;article&gt;</span> ou
        <span className="text-emphasis"> &lt;nav&gt;</span>).
      </p>
    </div>
  );
}

export default ContentCard;

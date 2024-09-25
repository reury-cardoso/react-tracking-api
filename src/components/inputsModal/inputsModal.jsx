/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./inputsModal.css";
import iconLoading from "../../assets/tubeSpinner.svg";

function InputsModal({
  showModal,
  closeModal,
  createCard,
  loading,
  setLoading,
  isEdit,
  cardDetails,
  updateCard,
}) {
  const [personalName, setPersonalName] = useState("");
  const [typeHelp, setTypeHelp] = useState("");
  const [address, setAddress] = useState("");

  const [inputError, setInputError] = useState([]);

  async function createNewCardOrEdit(card) {
    function validateInput() {
      let error = [];

      if (!personalName) error.push("1");
      if (!typeHelp) error.push("2");
      if (!address) error.push("3");

      setInputError(error);

      return error.length === 0;
    }

    const data = {
      applicantName: personalName,
      supportType: typeHelp,
      address,
    };

    if (!validateInput()) return;

    setLoading(true);

    if (isEdit) {
      const update = await updateCard(card.id, data, card.trackingCode);

      if (!update) {
        return;
      }
    } else {
      const create = await createCard(data);

      if (!create) {
        return;
      }

      setPersonalName("");
      setTypeHelp("");
      setAddress("");
    }
  }

  useEffect(() => {
    if (cardDetails) {
      setPersonalName(cardDetails.applicantName);
      setTypeHelp(cardDetails.supportType);
      setAddress(cardDetails.address);
    }
  }, []);

  const nameButton = isEdit ? "Editar Registro" : "Adicionar Registro";

  return (
    <div className={showModal ? "modal display-block" : "modal display-none"}>
      <section className="modalMain container">
        <div className="modalText">
          <span>{isEdit ? "Editar Registro" : "Criar Registro"}</span>
          <p>
            Preencha as informações abaixo para{" "}
            {isEdit ? "editar o " : "adicionar um novo"} registro
          </p>
        </div>
        <div className="container">
          <label htmlFor="personalName">Nome do Solicitante</label>
          <input
            onChange={(event) => {
              setInputError(inputError.filter((error) => error !== "1"));
              setPersonalName(event.target.value);
            }}
            type="text"
            id="personalName"
            placeholder=""
            value={personalName}
            required
          />
          <div
            style={inputError.includes("1") ? {} : { display: "none" }}
            className="error"
          >
            Verifique o campo Nome do Solicitante.
          </div>

          <label htmlFor="typeHelp">Tipo de Auxílio</label>
          <input
            onChange={(event) => {
              setInputError(inputError.filter((error) => error !== "2"));
              setTypeHelp(event.target.value);
            }}
            type="text"
            id="typeHelp"
            placeholder=""
            value={typeHelp}
            required
          />
          <div
            style={inputError.includes("2") ? {} : { display: "none" }}
            className="error"
          >
            Verifique o campo Tipo de Auxílio.
          </div>

          <label htmlFor="address">Endereço</label>
          <input
            onChange={(event) => {
              setInputError(inputError.filter((error) => error !== "3"));
              setAddress(event.target.value);
            }}
            type="text"
            id="address"
            placeholder=""
            value={address}
            required
          />
          <div
            style={inputError.includes("3") ? {} : { display: "none" }}
            className="error"
          >
            Verifique o campo Endereço.
          </div>

          <div className="divButtons">
            <button
              id="stopProcess"
              type="submit"
              onClick={() => {
                closeModal();
                setInputError([]);
              }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              onClick={() => createNewCardOrEdit(isEdit ? cardDetails : "")}
            >
              {loading ? (
                <img height={14} src={iconLoading} alt="ícone de loading" />
              ) : (
                nameButton
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InputsModal;

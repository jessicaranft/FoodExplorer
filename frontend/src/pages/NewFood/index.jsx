import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUpload } from 'react-icons/fi';

import { api } from '../../services/api';
import { SearchContext } from '../../hooks/search';

import { Container, Navigation, Form } from './styles';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { Footer } from '../../components/Footer';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { IngredientTagItem } from '../../components/IngredientTagItem';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';

export function NewFood({ selectedTheme, setSelectedTheme }) {
  const [foods, setFoods] = useState([]);
  const searchTitle = new URLSearchParams(location.search).get("title");
  const [search, setSearch] = useState(searchTitle || "");

  const [imageFile, setImageFile] = useState(null);
  const [fileMessage, setFileMessage] = useState("Selecione a imagem");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddImage(e) {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      setFileMessage(file.name);
    }
  }

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  function handleChangePrice(e) {
    const value = e.target.value;
    const formattedValue = formatPrice(value);
    setPrice(formattedValue);
  }

  function formatPrice(value) {
    if (!value) {
      return '';
    }

    const formattedValue = value.replace(',', '.');
    return formattedValue;
  }

  async function handleNewFood() {
    if (!imageFile) {
      return alert("Insira uma imagem para o prato ou bebida.");
    }

    if (!title) {
      return alert("Digite o nome do prato ou bebida.");
    }

    if (!category) {
      return alert("Selecione a categoria do prato ou bedida.");
    }

    if (!price) {
      return alert("Digite o preço do prato ou bebida.");
    }

    if (newIngredient) {
      return alert("Você deixou um ingrediente para adicionar, mas não adicionou. Clique em + para adicionar o ingrediente ou deixe o campo vazio.")
    }

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    /* Corrige o problema de ingredients.map is not a function */
    for (let i = 0; i < ingredients.length; i++) {
      formData.append("ingredients[]", ingredients[i]);
    }

    await api
      .post("/food", formData)
      .then(alert("Prato criado com sucesso!"), navigate("/"))
      
    }

    useEffect(() => {
      async function fetchFood() {
        const response = await api.get(`/food?title=${search}`)
        setFoods(response.data);
      }
  
      fetchFood(search);
    }, [search]);

  return (
    <Container>
      <SearchContext.Provider value={{ setSearch }}>
        <HeaderAdmin
          setSelectedTheme={setSelectedTheme}
          selectedTheme={selectedTheme}  
        />
      </SearchContext.Provider>

      <Navigation>
        <div className="mobile-only" >
          <ButtonText title="voltar" size="normal" onClick={handleBack} />
        </div>
        <div className="desktop-only" >
          <ButtonText title="voltar" size="large" onClick={handleBack} />
        </div>
      </Navigation>

      <Form>
        <h1>Adicionar prato</h1>

        <div className="col-3">
          <div className="input-container">
            <p>Imagem do prato</p>
            <div className="file-input-container">
              <label htmlFor="image" className="file-input-container">
                <FiUpload size={30} />
                <input type="file" id="image" onChange={handleAddImage} />
                <p className="file-input-message">{fileMessage}</p>
              </label>
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="title">Nome</label>
            <Input
              type="text"
              id="title"
              placeholder="Ex.: Salada Ceasar"
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="category">Categoria</label>
            <select
              name="category"
              id="category"
              defaultValue={'default'}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="default" disabled>Selecione a categoria</option>
              <option value="meal">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="drink">Bebida</option>
            </select>
          </div>
        </div>

        <div className="col-2">
          <div className="input-container">
            <p className="p-label">Ingredientes</p>
            <div className="ingredients-tags-container">
              {
                ingredients.map((ingredient, index) => (
                  <IngredientTagItem
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                   />
                ))
              }
              <IngredientTagItem
                placeholder="Adicionar"
                isNew
                onChange={e => setNewIngredient(e.target.value)}
                value={newIngredient}
                onClick={handleAddIngredient}
              />
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="price">Preço</label>
            <div className="price-input-container">
              <span className="currency-symbol">R$</span>
              <Input
                type="number"
                id="price"
                placeholder="00,00"
                value={price}
                onChange={handleChangePrice}
                className="price-input"
              />
            </div>
          </div>

        </div>

        <div className="input-container">
          <label htmlFor="description">Descrição</label>
          <Textarea
            id="description"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <div className="button-container">
          <Button
            title="Salvar alterações"
            showicon={false}
            tomato400
            onClick={handleNewFood}
          />
        </div>
      </Form>

      <Footer />
    </Container>
  );
}
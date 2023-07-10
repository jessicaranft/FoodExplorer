import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

export function EditFood({ selectedTheme, setSelectedTheme }) {
  const [foods, setFoods] = useState([]);
  const searchTitle = new URLSearchParams(location.search).get("title");
  const [search, setSearch] = useState(searchTitle || "");

  const [data, setData] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [fileMessage, setFileMessage] = useState("Selecione a imagem para alterá-la");
  const navigate = useNavigate();
  const params = useParams();

  function handleBack() {
    navigate(-1);
  }

  function handleUpdateImage(e) {
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

  async function handleUpdateFood() {
    if (!title) {
      return alert("Digite o nome do prato.");
    }

    if (!category) {
      return alert("Selecione a categoria do prato ou bedida.");
    }

    if (!price) {
      return alert("Digite do preço do prato.");
    }

    if (newIngredient) {
      return alert("Você deixou um ingrediente para adicionar, mas não adicionou. Clique em + para adicionar o ingrediente ou deixe o campo vazio.")
    }

    const formData = new FormData();

    if (imageFile) {
      formData.append("image", imageFile);
    }

    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    for (let i = 0; i < ingredients.length; i++) {
      formData.append("ingredients[]", ingredients[i]);
    }

    await api
      .put(`/food/${params.id}`, formData)
      .then(alert("Prato atualizado com sucesso!"), navigate("/"))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Erro ao atualizar o prato.");
        }
      });
  }

  async function handleRemoveFood() {
    const confirm = window.confirm("Deseja realmente remover o prato?");

    if (confirm) {
      await api.delete(`/food/${params.id}`);
      alert("Prato removido com sucesso!");
      navigate("/");
    }
  }

  useEffect(() => {
    async function getFoodData() {
      try {
        const response = await api.get(`/food/${params.id}`);
        setData(response.data);

        const {
          title,
          description,
          category,
          price,
          ingredients,
          image
        } = response.data;

        setTitle(title);
        setCategory(category);
        setPrice(price);
        setDescription(description)
        setIngredients(ingredients.map(ingredient => ingredient.name));
        setFileMessage(image);
      } catch (error) {
        alert("Erro ao buscar os dados do prato.");       
      }
    }

    getFoodData();
  }, []);

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
        <h1>Editar prato</h1>

        <div className="col-3">
          <div className="input-container">
            <p>Imagem do prato</p>
            <div className="file-input-container">
              <label htmlFor="image" className="file-input-container">
                <FiUpload size={30} />
                <input type="file" id="image" onChange={handleUpdateImage} />
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
              value={title}
            />
          </div>

          <div className="input-container">
            <label htmlFor="category">Categoria</label>
            <select
              name="category"
              id="category"
              value={category}
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
                onChange={handleChangePrice}
                value={price}
                className="price-input"
              />
            </div>
          </div>

        </div>

        <div className="input-container">
          <label htmlFor="description">Descrição</label>
          <Textarea
            id="description"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={e => setDescription(e.target.value)}
            value={description}
          />
        </div>

        <div className="button-container">
          <Button
            title="Excluir prato"
            showicon={false}
            dark800
            onClick={handleRemoveFood}
          />
          <Button
            title="Salvar alterações"
            showicon={false}
            tomato400
            onClick={handleUpdateFood}
            />
        </div>
      </Form>

      <Footer />
    </Container>
  );
}
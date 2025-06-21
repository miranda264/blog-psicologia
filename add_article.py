
import json
import os
from datetime import datetime

def add_article():
    print("\n--- Adicionar Novo Artigo ---")
    title = input("Título do Artigo: ")
    excerpt = input("Resumo do Artigo: ")
    category = input("Categoria (Saúde Mental, Autoconhecimento, Relacionamentos, Terapia): ")
    author = input("Nome do Autor: ")
    image_path = input("Caminho da Imagem (ex: /assets/minha-imagem.jpg): ")
    read_time = input("Tempo de Leitura (ex: 5 min): ")
    views = input("Visualizações (ex: 1.5k): ")
    rating = float(input("Avaliação (0.0 a 5.0): "))

    # Gerar um ID simples baseado no timestamp
    article_id = int(datetime.now().timestamp())
    date = datetime.now().strftime("%d de %B, %Y")

    new_article = {
        "id": article_id,
        "title": title,
        "excerpt": excerpt,
        "category": category,
        "date": date,
        "author": author,
        "image": image_path,
        "readTime": read_time,
        "views": views,
        "rating": rating
    }

    file_path = os.path.join(os.path.dirname(__file__), "articles.json")

    articles = []
    if os.path.exists(file_path) and os.path.getsize(file_path) > 0:
        with open(file_path, "r", encoding="utf-8") as f:
            try:
                articles = json.load(f)
            except json.JSONDecodeError:
                print("Erro ao ler articles.json. Criando um novo arquivo.")
                articles = []

    articles.append(new_article)

    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(articles, f, indent=2, ensure_ascii=False)

    print("\nArtigo adicionado com sucesso ao articles.json!")
    print("Lembre-se de reconstruir e redeployar o site para ver as mudanças online.")

if __name__ == "__main__":
    add_article()



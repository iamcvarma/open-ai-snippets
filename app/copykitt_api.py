from fastapi import FastAPI,HTTPException
from copykitt import generate_branding_keywords,generate_branding_snippet
from mangum import Mangum
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

handler = Mangum(app)
MAX_INPUT_LENGTH = 32

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

@app.get('/generate_snippet')
async def generate_snippet_api(prompt:str):
    validate_input(prompt)
    snippet = generate_branding_snippet(prompt)
    return {"snippet":snippet}


@app.get('/generate_keywords')
async def generate_keywords_api(prompt:str):
    validate_input(prompt)
    keywords = generate_branding_keywords(prompt)
    return {"keywords":keywords}


@app.get('/generate_snippet_and_keywords')
async def generate_snippet_and_keywords_api(prompt:str):
    validate_input(prompt)
    snippet = generate_branding_snippet(prompt)
    keywords = generate_branding_keywords(prompt)
    return {"snippet":snippet,"keywords":keywords}


def validate_input(prompt):
    if len(prompt)>=MAX_INPUT_LENGTH:
        raise HTTPException(
            status_code=400,
            detail=f'Input string too long. Must be under {MAX_INPUT_LENGTH} characters.'
        )
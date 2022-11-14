import os
import openai
import config
import argparse
import re

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--input','-i',type=str, required=True)
    args = parser.parse_args()
    user_input = args.input
    if len(user_input)>30:
        return
    print(generate_branding_keywords(user_input))

def generate_branding_snippet(subject:str):
    openai.api_key = config.OPENAI_API_KEY
    prompt = f'Generate Upbeat branding snippet for {subject}'

    response = openai.Completion.create(model="davinci-instruct-beta-v3", prompt=prompt,max_tokens=32)
    branding_text = response['choices'][0]['text'].strip()
    if branding_text[-1].isalpha():
        branding_text+='...'
    return branding_text

def generate_branding_keywords(subject:str):
    openai.api_key = config.OPENAI_API_KEY
    prompt = f'Generate related branding keywords for {subject}'

    response = openai.Completion.create(model="davinci-instruct-beta-v3", prompt=prompt,max_tokens=32)
    keyword_text = response['choices'][0]['text'].strip()
    
    keyword_array = re.split(',|\n|;|-',keyword_text)
    return list(map(lambda x:x.lower().strip(),keyword_array))

if __name__=="__main__":
    main()
import {FileVideo, Github, Upload, Wand2} from 'lucide-react'
import { Button } from "./components/ui/button";
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './components/ui/select';
import { Slider } from './components/ui/slider';
import { SelectGroup } from '@radix-ui/react-select';


export function App() {
  

  return (
    <div className='min-h-screen flex flex-col'>
      <div className="px-6 py-3 flex items-center justify-between border-b">
        
        <h1 className="text-xl font-bold">Upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-violet-400">Desenvolvido com amor na NWL da Rocketseat</span>
          <Separator orientation='vertical' className='hn-6'/>
          <Button variant="destructive">
            <Github className='w-4 h-4 mr-2'/>
            Github
          </Button>
        </div>
      </div>

      <main className='flex-1 p-6 flex gap-6'>
        <div className='flex flex-col flex-1 gap-4'>
          <div className='grid grid-rows-2 gap-4 flex-1'>
            <Textarea 
              className='resize-none p-4 leading-relaxed'
              placeholder='Inclua o prompt para a IA'
            />
            <Textarea 
              className='resize-none p-4 leading-relaxed'
              placeholder='Resultado gerado pela IA...' 
              readOnly
            />
          </div>

          <p className='text-sm text-violet-400'>
            Lembre-se: você pode utilizar a variável <code className='text-violet-600'>{'{transcription}'}</code> no seu prompt para adicionar a transcrição do vídeo selecionado.
          </p>
        </div>

        <aside className='w-80 space-y-6'>
          <form className='space-y-6'>
            <label 
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-violet-700 hover:bg-secondary"
            >
              <FileVideo className='w-4 h-4'/>
              Selecione um vídeo
              <input type="file" id="video" accept="video/mp4" className='sr-only'/>
            </label>

            <Separator />

            <div className='space-y-2'>
              <Label htmlFor='transcription-prompt'>Prompt de transcrição</Label>
              <Textarea id='transcription_prompt' 
                className='h-20 leading-relaxed resize-none' 
                placeholder='Inclúa palavras-chave mencionadas no vídeo separadas por vírgula(,)'
              />
            </div>

            <Button type="submit" className='w-full'>
              Carregar Vídeo 
              <Upload className='w-4 h-4 ml-2'/>
            </Button>
          </form>

          <Separator />

          <form className='space-y-6'>
          <div className='space-y-2'>
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Titulo do Youtube</SelectItem>
                  <SelectItem value="description">Descrição</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='space-y-2'>
              <Label>Modelo</Label>
              <Select defaultValue="gtp3.5" disabled>
                <SelectTrigger>
                  <SelectValue  placeholder="GPT 3.5-turbo 16k" />
                </SelectTrigger>
                <SelectGroup>
                  <SelectContent>
                    <SelectLabel>GPT 3.5-turbo 16k</SelectLabel>
                    <SelectItem value="gtp3.5">GPT 3.5-turbo 16k</SelectItem>
                  </SelectContent>
                </SelectGroup>
              </Select>
              <span className="block text-xs text-violet-400 italic">
                Você poderá customizar essa opção em breve
              </span>
            </div>

            <Separator />

            <div className='space-y-4'>
              <Label>Temperatura</Label>
              <Slider 
               min={0}
               max={1}
               step={0.1}
              
              />
              
              <span className="block text-xs text-violet-400 italic leading-relaxed">
                Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros
              </span>
            </div>

            <Separator />

            <Button type="submit" className='w-full'>
              Executar
              <Wand2 className='w-4 h-4 ml-2'/>
            </Button>


          </form>
        </aside>
      </main>
    </div>
  )
}

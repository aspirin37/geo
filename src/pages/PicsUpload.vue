<template>
    <main class="page-container"
          @drop.prevent>
        <div @click="clickFileBtn">
            <drop class="dropzone"
                  :class="{ over }"
                  @dragover="over = !isPreviewDragged"
                  @dragleave="over = false"
                  @drop="handleDrop">
                <span class="dropzone-text">Выберите фотографии или перетащите их в выделенную область</span>
                <input type="file"
                       class="d-none"
                       ref="file-btn"
                       multiple
                       accept="image/*"
                       @change="handleFiles">
            </drop>
        </div>
        <draggable class="dropzone-gallery"
                   :options="draggableOptions"
                   v-model="files">
            <div class="dropzone-preview-wrapper"
                 @dragstart="isPreviewDragged = true"
                 @dragend="isPreviewDragged = false"
                 v-for="(it, i) in files"
                 :key="i">
                <img :src="it.src">
            </div>
        </draggable>
    </main>
</template>
<script>
import Draggable from 'vuedraggable'
import { Drop } from 'vue-drag-drop';

export default {
    components: {
        Draggable,
        Drop
    },
    data() {
        return {
            isPreviewDragged: false,
            over: false,
            files: [],
            filesLength: 0,
            draggableOptions: {
                animation: 300,
            }
        }
    },
    methods: {
        addFile(file) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                let obj = {
                    file,
                    src: reader.result,
                    name: file.name,
                    fixed: false,
                    order: this.filesLength
                }
                this.files.push(obj)
                this.filesLength++
            }

        },
        handleDrop(data, evt) {
            event.preventDefault()
            const files = event.dataTransfer.files;
            for (let i = 0; i < files.length; i++) {
                if (files.item(i).type.includes('image')) this.addFile(files.item(i))
            }
            this.over = false;
        },
        handleFiles(evt) {
            const files = this.$refs['file-btn'].files;

            for (let i = 0; i < files.length; i++) {
                this.addFile(files.item(i))
            }
        },
        clickFileBtn() {
            this.$refs['file-btn'].click()
        },
        dragPreview(evt) {
            this.isPreviewDragged = true
            // var dragIcon = document.createElement("img");
            // dragIcon.src = evt.srcElement.children[0].currentSrc
            // dragIcon.style.width = "60px";
            // dragIcon.style.height = "60px";
            // var div = document.createElement('div');
            // div.appendChild(dragIcon);
            // div.style.position = "absolute";
            // div.style.top = "0px";
            // div.style.left = "-60px";
            // document.querySelector('body').appendChild(div);
            // evt.dataTransfer.setDragImage(div, -60, -60);
            var img = new Image();
            img.src = evt.srcElement.children[0].currentSrc;
            evt.dataTransfer.setDragImage(img, 10, 10);

        },
        delay(ms) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, ms)
            })
        }
    }
}
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';
</style>
<style lang="scss">
@import '@/styles/_variables.scss';

.dropzone {
    display: flex;
    height: 200px;
    margin-bottom: 20px;
    transition: 0.3s;
    cursor: pointer;
}

.dropzone:hover {
    background-color: #f6f6f6;
}

.over .dropzone-text {
    opacity: 0.5;
}

.dropzone-text {
    color: #777;
    margin: 2em auto;
    text-align: center;
}

.dropzone-gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.dropzone-preview-wrapper {
    border-radius: 20px;
    padding: 10px;
}

.dropzone-gallery img {
    // margin: 10px;
    border-radius: 20px;
    overflow: hidden;
    width: 120px;
    height: 120px;
    position: relative;
    display: block;
    z-index: 10;
}

.visibility-hidden {
    visibility: hidden;
}
</style>